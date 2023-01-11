var patch = new Patch();

patch.inputs = [
  new PatchInput("Input", types.NUMBER, 0),
];

patch.outputs = [
  new PatchOutput("Output", types.NUMBER),
];

patch.alwaysNeedsToEvaluate = false;
patch.loopAware = false;

patch.evaluate = function() {
  patch.outputs[0].value = patch.inputs[0].value;
}

return patch;
