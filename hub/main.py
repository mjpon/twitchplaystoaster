import paho.mqtt.publish as publish
MQTT_SERVER = "10.0.0.131"
MQTT_PATH = "test_channel"

publish.single(MQTT_PATH,"do it",hostname=MQTT_SERVER)