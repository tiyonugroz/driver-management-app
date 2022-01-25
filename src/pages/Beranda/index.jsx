import React from "react";
import { Layout, Row, Col, Card, Typography } from "antd";
import { FormWrapper } from "./style";

const { Content } = Layout;
const { Title, Text } = Typography;

function Beranda() {
  return (
    <Content
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}
    >
      <FormWrapper>
        <Card>
          <Row>
            <Col span={12}>
              <Title level={4}>Beranda</Title>
              <Text>Tampilan beranda.</Text>
            </Col>
          </Row>
        </Card>
      </FormWrapper>
    </Content>
  );
}

export default Beranda;
