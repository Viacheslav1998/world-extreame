<template>
  <div class="auth-wrapper bg-blue-grey-darken-3">
    <div class="auth-card">
      <section class="auth-section">
        <h2 class="title_reg">Получить Доступ</h2>
        <p class="subtitle">в админ панель:</p>
        
        <form @submit.prevent="handleRegister">
          <div class="form-group">
            <label for="reg-email">Электронная почта</label>
            <input 
              id="reg-email"
              v-model="registerData.email" 
              type="email" 
              placeholder="name@example.com"
              required 
            />
          </div>
          
          <div class="form-group">
            <label for="reg-password">Придумай пароль</label>
            <input 
              id="reg-password"
              v-model="registerData.password" 
              type="password" 
              placeholder="••••••••"
              required 
            />
          </div>

          <button type="submit" class="btn btn-reg" :disabled="loading">
            Зарегистрироваться
          </button>
        </form>
      </section>

      <div class="divider">
        <span>или</span>
      </div>
     
      <section class="auth-section login-section">
        <h3 class="title_login">Уже есть аккаунт?</h3>
        
        <form @submit.prevent="handleLogin">
          <div class="form-row">
            <div class="form-group compact">
              <input 
                v-model="loginData.email" 
                type="email" 
                placeholder="Email" 
                required 
              />
            </div>
            
            <div class="form-group compact">
              <input 
                v-model="loginData.password" 
                type="password" 
                placeholder="Пароль" 
                required 
              />
            </div>
          </div>

          <button type="submit" class="btn btn-login" :disabled="loading">
            Войти в систему
          </button>
        </form>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

import type { AuthPayload } from './types' 

const loading = ref<boolean>(false)


const registerData = reactive<AuthPayload>({
  email: '',
  password: ''
})


const loginData = reactive<AuthPayload>({
  email: '',
  password: ''
})

const handleRegister = async (): Promise<void> => {
  loading.value = true
  try {
    console.log('TS: Регистрируем пользователя:', registerData)
    await new Promise((resolve) => setTimeout(resolve, 1200))
    alert('Успешная регистрация!')
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
}

const handleLogin = async (): Promise<void> => {
  loading.value = true
  try {
    console.log('TS: Вход в систему:', loginData)
    await new Promise((resolve) => setTimeout(resolve, 1200))
    alert('Добро пожаловать обратно!')
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>

.auth-wrapper {
  /* f */
  background-image: url('/main/tx5.jpg');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  height: 100%;
  font-family: 'Inter', system-ui, sans-serif;
  padding: 1rem;
}

.auth-card {
  width: 100%;
  max-width: 440px;
  background: #18181cf8;
  border: 1px solid #2d2d34;
  border-radius: 16px;
  padding: 2.5rem 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.auth-section {
  display: flex;
  flex-direction: column;
}

h2, h3 {
  margin: 0;
  font-weight: 600;
  letter-spacing: -0.5px;
}

.title_reg {
  color: #f5f5f7;
  font-size: 1.75rem;
  text-align: center;
}

.subtitle {
  color: #F4511E;
  font-size: 0.9rem;
  text-align: center;
  margin: 0.4rem 0 1.5rem 0;
}

.title_login {
  color: #a0a0ab;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  text-align: center;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2rem;
}

.form-group label {
  color: #a0a0ab;
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

input {
  width: 100%;
  padding: 0.75rem 1rem;
  background: #222227;
  border: 1px solid #3a3a44;
  border-radius: 8px;
  color: #a7a7a7;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  box-sizing: border-box;
}

input:focus {
  outline: none;
  border-color: #F4511E; 
  box-shadow: 0 0 0 3px rgba(66, 184, 131, 0.15);
}

.form-row {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.form-group.compact {
  margin-bottom: 0;
  flex: 1;
}

.btn {
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-reg {
  background: #F4511E;
  color: #fff;
}

.btn-reg:hover:not(:disabled) {
  background: #8a5242;
}

.btn-login {
  background: transparent;
  border: 1px solid #4f4f5a;
  color: #e4e4e7;
}

.btn-login:hover:not(:disabled) {
  background: #222227;
  border-color: #F4511E;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.divider {
  display: flex;
  align-items: center;
  text-align: center;
  color: #4f4f5a;
  margin: 2rem 0;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #2d2d34;
}

.divider span {
  padding: 0 0.75rem;
}
</style>
