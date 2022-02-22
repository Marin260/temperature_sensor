import { fromObject, Observable, Button } from '@nativescript/core'
import { ad as androidUtils } from "tns-core-modules/utils/utils";
import { startAccelerometerUpdates } from "nativescript-accelerometer"
import { AndroidSensors, AndroidSensorListener, SensorDelay } from 'nativescript-android-sensors';


export function HomeViewModel() {
  var test = 0;
  const context = androidUtils.getApplicationContext();
  var man = context.getSystemService(android.content.Context.SENSOR_SERVICE);
  let startSensor = man.getDefaultSensor(android.hardware.Sensor.TYPE_AMBIENT_TEMPERATURE);
  //let startSensor = man.getDefaultSensor(android.hardware.Sensor.TYPE_ACCELEROMETER);
  var nativeDelay = android.hardware.SensorManager.SENSOR_DELAY_NORMAL;
  const viewModel = new Observable()
  var sensorListener = new android.hardware.SensorEventListener({
    onAccuracyChanged: (sensor, accuracy) => {
    },
    onSensorChanged: e => {
      updateTemperature(e.values[0])
      viewModel.set('t', e.values[0])
    }
  });
  const updateTemperature = temp => {
    test = temp;
  }

  man.registerListener(
    sensorListener,
    startSensor,
    nativeDelay
  );

  viewModel.t = 0
  viewModel.x = 10
  viewModel.y = 20
  viewModel.z = 30
  const vis = 'visible'
  const hid = 'collapsed'
  const rev = 'Reveal'
  const hide = 'Hide'
  viewModel.visibility = vis
  viewModel.btnText = hide

  var accelerometer = require("nativescript-accelerometer")

  accelerometer.startAccelerometerUpdates(function(data) {
    viewModel.set('x', data.x)
    viewModel.set('y', data.y)
    viewModel.set('z', data.z)
  }, { sensorDelay: "ui" })

  viewModel.onTap = function(){
    if (viewModel.visibility == 'visible'){
      viewModel.set('visibility', hid)
      viewModel.set('btnText', rev)

    }
    else{
      viewModel.set('visibility', vis)
      viewModel.set('btnText', hide)
    }
  }



  return viewModel
}

export function buttonPressed(){
  alert('button pressed')
}