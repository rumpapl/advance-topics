# BullMQ


<details>
  <summary>Queues</summary>


### Auto-Removal of Jobs

- **Default Behavior**: Completed and failed jobs are stored in special sets (`completed` and `failed`) for review.
- **Auto-Removal Options**: Use `removeOnComplete` and `removeOnFail` to automatically delete jobs once they are finalized.
- **Remove All Jobs**: Set `removeOnComplete` and `removeOnFail` to `true` to delete all jobs immediately after they complete or fail.
- **Limit Retention by Count**: Specify a maximum number of jobs to keep, e.g., 1000 completed and 5000 failed jobs.
- **Limit Retention by Age**: Use `age` (in seconds) to keep jobs for a specific duration, with an optional `count` to limit the total number of jobs.
- **Lazy Removal**: Jobs are only removed when new jobs complete or fail, triggering the auto-removal process.

```javascript
await myQueue.add(
  "test",
  { foo: "bar" },
  {
    removeOnComplete: {
      age: 3600, // keep up to 1 hour
      count: 1000, // keep up to 1000 jobs
    },
    removeOnFail: {
      age: 24 * 3600, // keep up to 24 hours
    },
  }
);
```

### Adding jobs in bulk

```javascript
import { Queue } from 'bullmq';

const queue = new Queue('paint');

const name = 'jobName';
const jobs = await queue.addBulk([
  { name, data: { paint: 'car' } },
  { name, data: { paint: 'house' } },
  { name, data: { paint: 'boat' } },
]);
//This call can only succeed or fail, and all or none of the jobs will be added.
```

### Global Concurrency

```javascript
import { Queue } from 'bullmq';

await queue.setGlobalConcurrency(4);
const globalConcurrency = await queue.getGlobalConcurrency();

// When a concurrency level is chosen for workers, it will not override the global one; instead, it will be set as the maximum number of jobs that can be processed by a given worker in parallel, but never exceeding the global concurrency level.
```

### Removing Jobs

1. #### Drain Method: ####
    - When the queue is drained, all jobs that are **waiting** or **delayed** are removed.
    - Jobs that are **active**, **waiting for children**, **completed**, or **failed** remain unaffected.
    - **Parent jobs** within the drained queue:
      - Stay in the `waiting-children` status if they have pending children.
      - Are removed if they do not have any pending children.
    - **Parent jobs** in different queues:
      - Remain in `waiting-children` status if they have pending children in other queues.
      - Are moved to the `wait` status if they do not have pending children in other queues.
          
    ```javascript
    import { Queue } from 'bullmq';
      
    const queue = new Queue('paint');
      
   await queue.drain();
   ```

3. #### Clean Methos: ###
   
   - **Grace Period (60000 ms / 1 minute):**
     - Jobs older than this period will be considered for removal.
   - **Max Number of Jobs (1000):**
     - Maximum number of jobs to clean.
   - **Job State ('paused'):**
     - Only jobs in the 'paused' state will be cleaned.
     
   ```javascript
   import { Queue } from 'bullmq';
   
   const queue = new Queue('paint');
   
   const deletedJobIds = await queue.clean(
   60000, // 1 minute - grace period (jobs older than this are considered for removal)
   1000, // max number of jobs to clean
   'paused', // job state to clean
   );
   ```

5. #### Obliterate Method: ####
   - Completely obliterates a queue and all of its contents.
  
   ```javascript
   import { Queue } from 'bullmq';
   
   const queue = new Queue('paint');
   
   await queue.obliterate();
   ```

</details>






