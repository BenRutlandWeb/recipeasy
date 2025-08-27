export const formatMinutes = (minutes) => {
    if (minutes < 60) {
        return `${minutes}m`;
    }

    if (minutes === 60) {
        return `1h`;
    }

    const h = Math.floor(minutes / 60);
    const m = minutes % 60;

    return `${h}h ${m}m`;
};
