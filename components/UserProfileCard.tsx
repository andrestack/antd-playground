import React from 'react'
import { Card, Avatar, Col, Row } from 'antd'

const UserProfileCard: React.FC = () => (
  <Row>
    <Col span={18} push={6}>This is the left side</Col>
    <Col span={6} pull={18}>This is the right side</Col>
  </Row>
)

export default UserProfileCard
