import { List, Typography, Divider, Space, Card } from "antd";

const InfoPage = ({ info }) => {

    const { Text } = Typography;
    const { Item } = List;

    return (
        <Card title={`Welcome ${info?.firstNameAdmin} ${info?.lastNameAdmin}!`} bordered={false} style={{ width: '30%' }}>
            <Space direction="vertical" style={{ width: '100%' }}>
                <Divider orientation="left">CompanyId: {info?.companyId}</Divider>
                <List
                    bordered
                    dataSource={info.locationObjects}
                    header={<Text type="secondary">Locations</Text>}
                    renderItem={item => (
                        <Item>
                            <Text mark>{item.locationName}</Text>
                        </Item>
                    )}
                />
                <List
                    bordered
                    dataSource={info.currentLocation}
                    header={<Text type="secondary">Current Locations</Text>}
                    renderItem={item => (
                        <Item>
                            <Text>{item.locationName}</Text>
                        </Item>
                    )}
                />
            </Space>
        </Card>
    )
}

export default InfoPage