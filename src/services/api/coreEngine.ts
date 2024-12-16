// src/services/api/coreEngine.ts
import axios from 'axios';

const BASE_URL = process.env.ABARE_ENGINE_URL || 'http://localhost:8000';

export interface PropertyAnalysisRequest {
    address: string;
    propertyType?: string;
    price?: number;
    noi?: number;
}

export interface LoanAnalysisRequest {
    loanAmount: number;
    propertyType: string;
    ltv?: number;
    dscr?: number;
}

class CoreEngineAPI {
    private api = axios.create({
        baseURL: BASE_URL,
        headers: {
            'Content-Type': 'application/json',
        }
    });

    async analyzeProperty(data: PropertyAnalysisRequest) {
        try {
            const response = await this.api.post('/api/analysis/property', data);
            return response.data;
        } catch (error) {
            console.error('Property analysis error:', error);
            throw error;
        }
    }

    async analyzeLoan(data: LoanAnalysisRequest) {
        try {
            const response = await this.api.post('/api/analysis/loan', data);
            return response.data;
        } catch (error) {
            console.error('Loan analysis error:', error);
            throw error;
        }
    }

    async processDocument(file: Buffer, filename: string) {
        try {
            const formData = new FormData();
            formData.append('file', new Blob([file]), filename);
            
            const response = await this.api.post('/api/documents/process', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            return response.data;
        } catch (error) {
            console.error('Document processing error:', error);
            throw error;
        }
    }
}

export const coreEngine = new CoreEngineAPI();
