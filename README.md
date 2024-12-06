# React setInterval Cleanup Issue

This example demonstrates a common error when using `setInterval` within a React component's `useEffect` hook.  The provided code doesn't include a cleanup function to stop the interval when the component unmounts or when dependencies change. This can lead to memory leaks and unexpected behavior.

## Problem

The `setInterval` call inside the `useEffect` hook lacks a cleanup function. This means every time the component renders (or even on component remount), a new interval is started without stopping the previous ones. As a result, the counter increments much faster than intended.

## Solution

The solution involves using the return value of `useEffect` to provide a cleanup function. This function stops the interval when it's no longer needed.

## How to reproduce:

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the counter incrementing rapidly. 