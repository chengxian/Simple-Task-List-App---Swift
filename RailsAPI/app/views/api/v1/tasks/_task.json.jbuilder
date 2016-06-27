task ||= @task

json.id task.id
json.title task.title
json.completed task.completed
json.user_id task.user_id
json.created_at task.created_at
json.updated_at task.updated_at