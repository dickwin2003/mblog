import { checkDatabaseHealth, getRandomFortune, getFortune } from './db.server';
import type { D1Database } from '@cloudflare/workers-types';

async function testDatabase(db: D1Database) {
  console.log('开始测试数据库连接...');

  try {
    // 测试数据库健康状态
    console.log('1. 测试数据库健康状态...');
    const isHealthy = await checkDatabaseHealth(db);
    console.log('数据库健康状态:', isHealthy ? '正常' : '异常');

    // 测试获取随机签文
    console.log('\n2. 测试获取随机签文...');
    const randomFortune = await getRandomFortune(db);
    console.log('随机签文:', randomFortune ? '获取成功' : '获取失败');
    if (randomFortune) {
      console.log('签文内容:', {
        id: randomFortune.id,
        title: randomFortune.title,
        poem: randomFortune.poem.substring(0, 50) + '...'
      });
    }

    // 测试获取指定签文
    console.log('\n3. 测试获取指定签文 (ID: 1)...');
    const specificFortune = await getFortune(db, 1);
    console.log('指定签文:', specificFortune ? '获取成功' : '获取失败');
    if (specificFortune) {
      console.log('签文内容:', {
        id: specificFortune.id,
        title: specificFortune.title,
        poem: specificFortune.poem.substring(0, 50) + '...'
      });
    }

  } catch (error) {
    console.error('测试过程中发生错误:', error);
  }
}

// 导出测试函数供其他模块使用
export { testDatabase };
