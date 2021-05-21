import axios from 'axios'

let host = window.g.ApiUrl

// 获取主页信息

export const getindex = params => { return axios.get(`${host}/api/index/`, { params: params }) }

// 获取城市信息

export const getcity = params => { return axios.get(`${host}/api/city/`) }

// 获取详细信息

export const getdetail = params => { return axios.get(`${host}/api/detail/`, { params: params }) }

// 注册

export const postRegister = params => { return axios.post(`${host}/api/register/`, { params: params }) }
