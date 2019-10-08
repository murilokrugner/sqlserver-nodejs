/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VC3010', {
    VC3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VC3_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VC3_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VC3_CODMAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VC3_MODVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    VC3_FABMOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VC3_QTDFRO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VC3_AQUNOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VC3_DATAQU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VC3_DATVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VC3_PROVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VC3_CHASSI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    VC3_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VC3_CODOPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VC3_TERPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VC3_KMMES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VC3_KMLIT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    VC3_SITUAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VC3_DATATU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VC3_VALMER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VC3_VALAQU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VC3_ESTGER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VC3_FINANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VC3_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    VC3_PERPAR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VC3_PLAVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VC3_LOGALT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    }
  }, {
    tableName: 'VC3010'
  });
};
