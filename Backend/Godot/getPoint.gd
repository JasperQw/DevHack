extends HTTPRequest

var api_request = HTTPRequest.new()
# Called when the node enters the scene tree for the first time.
func _ready():
	var http_request = HTTPRequest.new()
	add_child(http_request)
	http_request.request_completed.connect(self._http_request_completed)
	
	# Make the API GET request
	api_request.request("http://localhost:3000/api/get_point")

func _http_request_completed(result, response_code, headers, body):
	var json = JSON.new()
	json.parse(body.get_string_from_utf8())
	var response = json.get_data()
	print(response)
	preload("res://Label.gd").text = response.point
	
# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass
