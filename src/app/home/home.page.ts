import { Component } from '@angular/core';
import { LocalNotifications } from '@awesome-cordova-plugins/local-notifications/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private localNotifications: LocalNotifications) {}

  ngOnInit()
  {
    this.ThongBao();
    console.log('ok');
  }

  ThongBao()
  {
    this.localNotifications.schedule({
      id: 1,
      title: 'VkoolTips.com thông báo',
      text: 'Cập nhật tính năng đổi lượt đi khi chủ phòng thắng',
    });
  }
}
