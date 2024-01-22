import{ DataTypes, Sequelize } from "sequelize";


export default (sequelize) => {
    
    return sequelize.define("Guest", {
        firstname: {
            type:DataTypes.STRING(50),
            allowNull: true
        },
        lastname: {
            type:DataTypes.STRING(50),
            allowNull: true
        },
        email: {
            type:DataTypes.STRING(255),
            allowNull: true,
            unique: {
                name: 'UK_Guest__Email'
            }
        },
        birthdate: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        hasConfirm: {
            type:DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    })
};