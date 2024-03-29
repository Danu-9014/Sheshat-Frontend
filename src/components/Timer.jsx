import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setElapsedTime(Date.now() - startTime);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning, startTime]);

    const handleStart = () => {
        setStartTime(Date.now());
        setIsRunning(true);
    };

    const handleEnd = () => {
        setIsRunning(false);
        setEndTime(Date.now());
        // Assuming you have some function to save the time to DynamoDB
        saveTimeToDynamoDB();
    };

    const saveTimeToDynamoDB = () => {
        // Your code to save the elapsed time to DynamoDB
        const elapsedTimeInSeconds = Math.floor(elapsedTime / 1000);
        fetch('/api/updatetime', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ elapsedTime: elapsedTimeInSeconds }),
        })
            .then(response => {
                // Handle response
                console.log('Time saved to DynamoDB');
            })
            .catch(error => {
                // Handle error
                console.error('Error saving time to DynamoDB:', error);
            });
    };

    return (
        <div>
            <div>Elapsed Time: {formatTime(elapsedTime)}</div>
            <button onClick={handleStart} disabled={isRunning}>
                Start
            </button>
            <button onClick={handleEnd} disabled={!isRunning}>
                End
            </button>
        </div>
    );
};

const formatTime = time => {
    const seconds = Math.floor(time / 1000) % 60;
    const minutes = Math.floor(time / (1000 * 60)) % 60;
    const hours = Math.floor(time / (1000 * 60 * 60)) % 24;

    return `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export default Timer;