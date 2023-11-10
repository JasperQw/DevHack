extends CharacterBody2D

func _physics_process(delta):
	velocity = velocity.move_toward(Vector2.ZERO, 200 * delta)
	move_and_slide()

func _on_hurt_box_area_entered(area):
	var direction = area.owner.get_node('Player').moving_dir
	velocity = direction * 120
	#queue_free()
	
