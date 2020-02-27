import { SERVER } from "config/server.json";
import axios from "axios";

class AdminRepository {
  async handleAdminLogin(request) {
    //관리자 로그인
    try {
      const { data } = await axios.post(`${SERVER}/api/auth/login`, request);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async handleAdminPage(request) {
    //정보 수정
    try {
      const { data } = await axios.put(
        `${SERVER}/api/infectee/total
      `,
        request
      );
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new AdminRepository();
