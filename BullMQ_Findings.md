# BullMQ

## Queues

### Auto-Removal of Jobs

- **Default Behavior**: Completed and failed jobs are stored in special sets (`completed` and `failed`) for review.
- **Auto-Removal Options**: Use `removeOnComplete` and `removeOnFail` to automatically delete jobs once they are finalized.
- **Remove All Jobs**: Set `removeOnComplete` and `removeOnFail` to `true` to delete all jobs immediately after they complete or fail.
- **Limit Retention by Count**: Specify a maximum number of jobs to keep, e.g., 1000 completed and 5000 failed jobs.
- **Limit Retention by Age**: Use `age` (in seconds) to keep jobs for a specific duration, with an optional `count` to limit the total number of jobs.
- **Lazy Removal**: Jobs are only removed when new jobs complete or fail, triggering the auto-removal process.
