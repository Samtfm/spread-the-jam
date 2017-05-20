json.extract! event,
  :id,
  :date_time,
  :address,
  :description,
  :city_id,
  :host_id

json.host_username event.host.username
