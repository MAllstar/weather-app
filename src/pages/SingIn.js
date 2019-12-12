import React, { Component } from 'react';
import { Text } from 'react-native';
import {
  Container,
  Content,
  Form, Item,
  Input,
  Label,
  Button,
} from 'native-base';
import Sign from '../utils/Sign';

export default class SignIn extends Component {
  state = {
    usr: null,
    pwd: null,
  };

  render() {
    const { navigation } = this.props
    const { usr, pwd } = this.state
    return (
      <Container>
        <Content>
          <Form style={{ marginBottom: 50 }}>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
                value={usr}
                onChangeText={usr => this.setState({ usr })}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input
                value={pwd}
                onChangeText={pwd => this.setState({ pwd })}
              />
            </Item>
          </Form>
          <Button
            block
            style={{ marginHorizontal: 10, backgroundColor: 'tomato' }}
            onPress={() => Sign.appSignIn(navigation, usr, pwd)}
          >
            <Text style={{ color: '#fff' }}>Sign Up</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
