extends Label

var userPoint = null
# Called when the node enters the scene tree for the first time.
func _ready():
	var http_request = HTTPRequest.new()
	add_child(http_request)
	http_request.request_completed.connect(self._on_http_request_request_completed)
	
	# Make the API GET request
	http_request.request("http://localhost:3000/api/get_points")
	
	


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass


func _on_http_request_request_completed(result, response_code, headers, body):
	var json = JSON.new()
	json.parse(body.get_string_from_utf8())
	var response = json.get_data()
	userPoint = response.point
	text = "Points: " + str(userPoint)
