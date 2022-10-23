const useSetColor = () => {
    return {
        from: `#${Math.floor(Math.random() * 0xffffff).toString(16)}`,
        to: `#${Math.floor(Math.random() * 0xffffff).toString(16)}`,
    };
};
export default useSetColor;
