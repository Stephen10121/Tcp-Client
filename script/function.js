var isConfig = Cookies.get("isConfig");
if (isConfig == "true"){
    console.log("Configuration Found");
} else {
    console.log("Cant find the configuration. Redirecting");
    window.location.replace("config.php?error=notconfig");
}