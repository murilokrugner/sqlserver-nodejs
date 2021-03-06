/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPED001', {
    ID_ENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ID_MATRIZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
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
    INDSITESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PASSCERT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    ENTATIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTRL_NFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    PASSENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    PASSCERT2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)'
    },
    IDEMPRESA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    LOGID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    }
  }, {
    tableName: 'SPED001'
  });
};
