import React from "react";
import { Layout, Row, Col, Card, Typography } from "antd";
import { FormWrapper } from "./style";

const { Content } = Layout;
const { Title, Text } = Typography;

function Pickup() {
  return (
    <Content
      style={{
        padding: 24,
        margin: 0,
      }}
    >
      <FormWrapper>
        <Card>
          <Row>
            <Col span={12}>
              <Title level={4}>PICKUP</Title>
              <Text>Tampilan pickup.</Text>
            </Col>
          </Row>
        </Card>
      </FormWrapper>
    </Content>
  );
}

export default Pickup;
