def test_create_match(session):
    match = Match(user1_id=1, user2_id=2)
    session.add(match)
    session.commit()
    assert match.id is not None
    assert match.is_active is True