/**
 * Model Currency
 * 
 */
export type Currency = {
  name: string
  ticker: string
}

/**
 * Model Instrument
 * 
 */
export type Instrument = {
  name: string
  ticker: string
  price: number
  currency_ticker: string
}

/**
 * Model FollowedInstrument
 * 
 */
export type FollowedInstrument = {
  instrument_ticker: string
  followed_since: Date
}

/**
 * Model PortfolioPosition
 * 
 */
export type PortfolioPosition = {
  instrument_ticker: string
  amount: number
}

/**
 * Model Operation
 * 
 */
export type Operation = {
  exchange_id: string | null
  instrument_ticker: string
  status: string
  operation_type: string
  amount: number
  price: number
  run_id: number | null
  updated_at: Date
  created_at: Date
}

/**
 * Model Algorithm
 * 
 */
export type Algorithm = {
  name: string
  description: string
  input_types: string
}

/**
 * Model AlgorithmRun
 * 
 */
export type AlgorithmRun = {
  id: number
  algorithm_name: string
  inputs: string
  state: string
  updated_at: Date
  created_at: Date
}




/**
 * Model Currency
 * 
 */
export interface ICurrency = {
  name: string
  ticker: string
}

/**
 * Model Instrument
 * 
 */
export interface IInstrument = {
  name: string
  ticker: string
  price: number
  currency_ticker: string
}

/**
 * Model FollowedInstrument
 * 
 */
export interface IFollowedInstrument = {
  instrument_ticker: string
  followed_since: Date
}

/**
 * Model PortfolioPosition
 * 
 */
export interface IPortfolioPosition = {
  instrument_ticker: string
  amount: number
}

/**
 * Model Operation
 * 
 */
export interface IOperation = {
  exchange_id: string | null
  instrument_ticker: string
  status: string
  operation_type: string
  amount: number
  price: number
  run_id: number | null
  updated_at: Date
  created_at: Date
}

/**
 * Model Algorithm
 * 
 */
export interface IAlgorithm = {
  name: string
  description: string
  input_types: string
}

/**
 * Model AlgorithmRun
 * 
 */
export interface IAlgorithmRun = {
  id: number
  algorithm_name: string
  inputs: string
  state: string
  updated_at: Date
  created_at: Date
}



