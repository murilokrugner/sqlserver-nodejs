/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TS1010', {
    TS1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TS1_CODBEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    TS1_PLACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TS1_DOCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TS1_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TS1_DTEMIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TS1_UFEMIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TS1_DTVENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TS1_QTDPAR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TS1_IDDOCT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
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
    },
    TS1_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TS1_NATURE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TS1_PREFIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TS1_NUMSE2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TS1_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TS1_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TS1_CONPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TS1_VALPAG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'TS1010'
  });
};
