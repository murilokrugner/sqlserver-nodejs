/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TSS0005', {
    CNPJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    CPF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    UF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    IE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                  '
    },
    TOKEN: {
      type: "VARBINARY",
      allowNull: true
    },
    FLAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                     '
    },
    ENTATIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CONTRATO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    LOGID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'TSS0005'
  });
};
