extends Node2D

func create_grass_effect():
	var GrassEffect = load("res://grass_effect.tscn")
	var grassEffect = GrassEffect.instantiate()
	var world = get_tree().current_scene
	world.add_child(grassEffect)
	grassEffect.global_position = global_position


func _on_hurt_box_area_entered(area):
	create_grass_effect()
	queue_free()
