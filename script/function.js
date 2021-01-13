var isConfig = Cookies.get("isConfig");
if (isConfig == "true"){
    console.log("Tis true");
} else {
    window.location.replace("config.php?error=notconfig");
}