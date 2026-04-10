// LOGIN
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function log(msg) {
  const logBox = document.getElementById("log");
  logBox.innerHTML += msg + "<br>";
  logBox.scrollTop = logBox.scrollHeight;
}

async function login() {
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;

  document.getElementById("log").innerHTML = "";

  document.getElementById("subtitle").innerText = "Scanning credentials...";

  await log("[SYSTEM] Initializing auth module...");
  await sleep(600);

  await log("[FIREWALL] Checking security layers...");
  await sleep(600);

  await log("[NETWORK] Verifying session...");
  await sleep(600);

  await log("[AI] Running behavioral analysis...");
  await sleep(600);

  // FAKE RULE (tu peux changer si tu veux)
  if (u === "admin" && p === "root") {

    await log("[ACCESS] Credentials valid");
    await log("[STATUS] ACCESS GRANTED");

    document.getElementById("subtitle").innerText = "Welcome back, operator.";

    await sleep(1200);

    document.getElementById("loginScreen").style.opacity = "0";
    document.getElementById("loginScreen").style.transition = "1s";

    setTimeout(() => {
      document.getElementById("loginScreen").style.display = "none";
    }, 1000);

  } else {

    await log("[ACCESS] INVALID CREDENTIALS");
    await log("[ALERT] Intrusion attempt detected");
    await log("[SECURITY] Session blocked for 5s");

    document.getElementById("subtitle").innerText = "ACCESS DENIED";

    // effet fake cooldown
    document.querySelector("button").disabled = true;

    setTimeout(() => {
      document.querySelector("button").disabled = false;
      document.getElementById("subtitle").innerText = "Retry authentication...";
    }, 5000);
  }
}

// NAV
function nav(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// TERMINAL
const cmd = document.getElementById("cmd");
const output = document.getElementById("output");

const ai = {
  help: "scan | whoami | status | clear",
  whoami: "CyberSec Student / Pentester",
  status: "System stable / monitoring active",
  scan: "Scanning network... no critical threats"
};

cmd.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    let v = cmd.value;
    output.innerHTML += "> " + v + "<br>";

    output.innerHTML += (ai[v] || "unknown command") + "<br>";
    cmd.value = "";
  }
});

// ALERTS
const incidents = [
  "Port scan detected",
  "Suspicious login attempt",
  "Firewall event blocked"
];

setInterval(() => {
  const msg = incidents[Math.floor(Math.random() * incidents.length)];
  const div = document.createElement("div");
  div.className = "alert";
  div.innerText = "⚠️ " + msg;
  document.body.appendChild(div);
  setTimeout(() => div.remove(), 4000);
}, 5000);

let threatCount = 0;

const logs = [
  "Firewall packet inspected",
  "Suspicious login attempt blocked",
  "Port scan detected",
  "New device fingerprint registered",
  "Encrypted traffic anomaly detected",
  "DNS request flagged"
];

function updateSOC() {

  // 🎯 Threat counter
  threatCount += Math.random() > 0.7 ? 1 : 0;
  document.getElementById("threats").innerText = threatCount;

  // 🌐 Network state
  const netStates = ["STABLE", "MONITORING", "ANALYZING"];
  document.getElementById("network").innerText =
    netStates[Math.floor(Math.random() * netStates.length)];

  // 🧠 Security level logic
  let level = "GREEN";
  if (threatCount > 3) level = "YELLOW";
  if (threatCount > 6) level = "RED";

  document.getElementById("level").innerText = level;

  // 🧾 LOG STREAM
  const log = logs[Math.floor(Math.random() * logs.length)];
  const div = document.createElement("div");

  div.innerText = `[${new Date().toLocaleTimeString()}] ${log}`;

  document.getElementById("logs").prepend(div);
}

// 🔁 live update
setInterval(updateSOC, 2000);

// THREAT MAP
const canvas = document.getElementById("mapCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = 200;

setInterval(() => {
  ctx.fillStyle = "black";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  for(let i=0;i<20;i++){
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(Math.random()*canvas.width, Math.random()*200,2,2);
  }
}, 500);