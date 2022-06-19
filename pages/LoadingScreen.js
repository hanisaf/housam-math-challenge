
function LoadingScreen() {
    function start() {
        setTimeout(function () {
            window.location.href = "/MathChallenge";
        }, 1000);
    }
    return <>
    <img src="https://i.pinimg.com/originals/8c/3d/f7/8c3df74f4c5619cf6ed86ec07966318a.jpg" height="125" />
    <h1>Welcome to SmartHousam App</h1>
    <button variant="primary" onClick={start}>Start</button>
    </>
}

export default LoadingScreen;