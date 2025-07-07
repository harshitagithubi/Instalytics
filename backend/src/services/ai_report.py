def generate_ai_report(analytics):
    return {
        "summary": f"Account {analytics['username']} has {analytics['followers']['count']} followers.",
        "recommendations": ["Post during peak hours (e.g., 14:00-16:00)", "Increase engagement with stories"]
    }