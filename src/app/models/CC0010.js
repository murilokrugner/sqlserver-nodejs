/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CC0010', {
    CC0_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CC0_SERMDF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CC0_NUMMDF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CC0_CHVMDF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    CC0_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CC0_STATEV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CC0_CODRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CC0_MSGRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                      '
    },
    CC0_PROTOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CC0_DTEMIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CC0_HREMIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CC0_UFINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CC0_UFFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CC0_XMLMDF: {
      type: "VARBINARY",
      allowNull: true
    },
    CC0_QTDNFE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CC0_VTOTAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CC0_PESOB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CC0_VEICUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CC0_TPEVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CC0_TPNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CC0_CARGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    tableName: 'CC0010'
  });
};
