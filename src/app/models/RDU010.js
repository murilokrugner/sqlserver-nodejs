/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RDU010', {
    RDU_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RDU_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDU_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    RDU_DATINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RDU_DATFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RDU_INIPLA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RDU_FIMPLA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RDU_EDTPLA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RDU_MSGPLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDU_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    RDU_INIINC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RDU_FIMINC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RDU_INIRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RDU_FIMRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    }
  }, {
    tableName: 'RDU010'
  });
};
