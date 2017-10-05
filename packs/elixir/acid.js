events.push = function(e) {
  var j = new Job("run-test")
  j.tasks = [
    "mix build",
    "mix test"
  ]
  r.run()
}
