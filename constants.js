"use strict";

// Name of devtools mozilla staff.
var STAFF = [
  "pbrosset", "vporof", "jlong", "poirot.alex", "bgrinstead", "nfitzgerald",
  "jdescottes", "jryans", "odvarko", "clarkbw", "jlaster", "hholmes",
  "ttromey", "jsantell", "gl", "lclark", "janx", "ejpbruel", "mratcliffe",
  "gtatum", "jwalker", "zer0", "past", "jfong", "mihai.sucan", "paul",
  "fayearthur", "anton", "dcamp", "jimb", "bbenvie", "rcampbell", "dtownsend",
  "yzenevich", "erahm", "kumar.mcmillan", "gasolin", "amarchesini",
  "winter2718", "terrence", "bchabod", "mvonbriesen", "jaideepb", "rchien"
];

// URL prefix to open a bug in bugzilla.
var BUG_URL = "https://bugzilla.mozilla.org/show_bug.cgi?id=";

// URL prefix to open a bug list.
var BUG_LIST_URL = "https://bugzilla.mozilla.org/buglist.cgi?bug_id=";

// URL prefix to open a bugzilla profile.
var PROFILE_URL = "https://bugzilla.mozilla.org/user_profile?login=";

// Whiteboard flag for good first bugs.
var GOOD_FIRST_BUG_WHITEBOARD = "good first bug";

// How many days do we wait until considering an assigned bug as unassigned.
var INACTIVE_AFTER = 25;
