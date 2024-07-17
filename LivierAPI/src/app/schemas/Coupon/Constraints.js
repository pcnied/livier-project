const constraints = {
    code: {
        presence: {
            allowEmpty: false,
            message: "deve ser informado",
        },
        type: {
            type: "string",
            message: "deve ser uma string",
        },
        uniqueness: true
    },
    discountPercent: {
        type: {
            type: "number",
            message: "deve ser um número",
        },
        numericality: {
            greaterThanOrEqualTo: 0,
            lessThanOrEqualTo: 100,
            message: "deve estar entre 0 e 100",
        },
    },
    discountFixed: {
        type: {
            type: "number",
            message: "deve ser um número",
        },
        numericality: {
            greaterThanOrEqualTo: 0,
            message: "deve ser maior ou igual a 0",
        },
    },
    reusable: {
        type: {
            type: "boolean",
            message: "deve ser um booleano",
        },
    },
};

module.exports = constraints;
