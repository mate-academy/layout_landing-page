SELECT
  p.title,
  p.content,
  u.username AS author,
  COUNT(c.id) AS comment_count
FROM
  posts p
  LEFT JOIN users u ON p.user_id = u.id
  LEFT JOIN comments c ON p.id = c.post_id
GROUP BY
  p.title,
  p.content,
  u.username;
