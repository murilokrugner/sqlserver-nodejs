/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AO4010', {
    AO4_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AO4_ENTIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AO4_CHVREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    AO4_CODUSR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AO4_CTRLTT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    AO4_PERVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    AO4_PEREDT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    AO4_PEREXC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    AO4_PERCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    AO4_USRCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AO4_IDESTN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    AO4_NVESTN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AO4_DTVLD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AO4_CODEQP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AO4_PROPRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    AO4_CODUND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AO4_TPACES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AO4_PRIORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
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
    tableName: 'AO4010'
  });
};
