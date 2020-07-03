const interpolate = (value, session = {}, options = {}) => {
    let string = value;
    
    Object.keys(session).forEach((key) => {
        let replace = options.leftDelimiter + key + options.rightDelimiter;
        string = string.replace(replace, session[key]);
    });
    return string;
};

alert(interpolate(
    "Hi! I'm Choo Choo, but your name is way cooler, isn't it, {firstname}?",
    { firstname: 'Rafah' },
    { leftDelimiter: '{', rightDelimiter: '}' }
));