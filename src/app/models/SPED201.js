/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPED201', {
    ID_ENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    XML: {
      type: "IMAGE",
      allowNull: true
    },
    DTENVTSS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HRENVTSS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTENVSEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HRENVSEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTRECSEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HRRECSEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DESCRICAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    AMBIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
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
    NUMCONTRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    UFGNRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    XMLERRO: {
      type: "IMAGE",
      allowNull: true
    },
    CODBARRAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                '
    },
    REQ_ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    DT_VALID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    IDGNRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    PDFDUA: {
      type: "IMAGE",
      allowNull: true
    },
    LOGID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    }
  }, {
    tableName: 'SPED201'
  });
};
