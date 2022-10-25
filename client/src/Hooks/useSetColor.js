const useSetColor = () => {
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    return {
        from: getRandomColor(),
        to: getRandomColor(),
        // from: `#${Math.floor(Math.random() * 0xffffff).toString(16)}`,
        // to: `#${Math.floor(Math.random() * 0xffffff).toString(16)}`,
    };
};
export default useSetColor;
