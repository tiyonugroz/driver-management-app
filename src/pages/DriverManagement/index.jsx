import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  Layout,
  Row,
  Col,
  List,
  Card,
  Typography,
  Input,
  Button,
  Avatar,
} from "antd";
import { FormWrapper, ListWrapper, Label, Pagination } from "./style";
import Scrollbars from "../../utils/customScrollBar";
import {
  SearchOutlined,
  PlusOutlined,
  EllipsisOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { DriverListFetched } from "../../redux/driverManagement/actions";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

function DriverManagement() {
  const [dataList, setDataList] = useState([]);
  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchDriverList = (params) => dispatch(DriverListFetched(params));
    const data = {
      endpoint: `?results=30`,
      method: "GET",
    };

    fetchDriverList(data);
  }, [dispatch]);

  const app = useSelector((state) => state.App);
  const data = useSelector((state) => state.DriverManagement.list);

  useEffect(() => {
    if (data !== null && data.data) {
      setDataList(data.data);
      setList(sliceIntoChunks(data.data, 5));
    }
  }, [data]);

  const sliceIntoChunks = (arr, chunkSize) => {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }
    return res;
  };

  const handlePage = (type) => {
    if (type === "next") {
      setPage(page + 1);
    } else {
      setPage(page - 1);
    }
  };

  const handleInput = (val) => {
    const arr = dataList.filter((item) => item.name.first.toLowerCase().includes(val) );

    setList(sliceIntoChunks(arr, 5));
  };

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
            <Col
              sm={24}
              md={12}
              style={{ marginBottom: app.view === "MobileView" ? 16 : 0 }}
            >
              <Title level={4}>DRIVER MANAGEMENT</Title>
              <Text>Data driver yang bekerja dengan Anda.</Text>
            </Col>
            <Col sm={24} md={12}>
              <Row gutter={8}>
                <Col
                  sm={24}
                  md={12}
                  style={{ marginBottom: app.view === "MobileView" ? 16 : 0 }}
                >
                  <Input
                    size="large"
                    placeholder="Cari Driver"
                    prefix={<SearchOutlined />}
                    onChange={(e) => handleInput(e.target.value)}
                  />
                </Col>
                <Col sm={24} md={12}>
                  <Button type="primary" size="large" block>
                    Tambah Driver <PlusOutlined />
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </FormWrapper>

      <ListWrapper>
        <Scrollbars>
          {list.length > 0 && (
            <List
              grid={
                app.view === "MobileView"
                  ? { gutter: 16, column: 1 }
                  : { gutter: 16, column: 5 }
              }
              dataSource={list[page]}
              renderItem={(item) => (
                <List.Item>
                  <Card
                    title={
                      <Text type="secondary">
                        Driver ID <span>{item.login.username}</span>
                      </Text>
                    }
                    extra={<EllipsisOutlined />}
                  >
                    <Avatar size={64} src={item.picture.medium} />
                    <Label>Nama Driver</Label>
                    <Paragraph
                      strong
                    >{`${item.name.first} ${item.name.last}`}</Paragraph>
                    <Label>Telepon</Label>
                    <Paragraph strong>{item.cell}</Paragraph>
                    <Label>Email</Label>
                    <Paragraph strong>{item.email}</Paragraph>
                    <Label>Tanggal Lahir</Label>
                    <Paragraph strong>{moment(item.dob.date).format("DD-MM-YYYY")}</Paragraph>
                  </Card>
                </List.Item>
              )}
              style={{ width: app.view === "MobileView" ? "100%" : 1400 }}
            />
          )}
        </Scrollbars>

        <Pagination>
          <Button type="link" onClick={() => handlePage("prev")} disabled={page === 0 ? true : false}>
            <LeftOutlined /> Previous Page
          </Button>
          <Button type="link" onClick={() => handlePage("next")} disabled={list.length === page + 1 ? true : false}>
            Next Page <RightOutlined />
          </Button>
        </Pagination>
      </ListWrapper>
    </Content>
  );
}

export default DriverManagement;
