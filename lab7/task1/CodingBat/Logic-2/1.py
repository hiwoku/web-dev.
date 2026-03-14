def make_bricks(small, big, goal):
    use_big = min(big, goal // 5)
    return goal - use_big * 5 <= small