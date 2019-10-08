/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CSM010', {
    CSM_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CSM_CODREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CSM_QUALPJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CSM_TPESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CSM_RECANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                         '
    },
    CSM_FMAPUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CSM_FMTRIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CSM_TARBIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CSM_APUTRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CSM_APUCTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CSM_APUCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CSM_CTAREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CSM_TPUTIL: {
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
    }
  }, {
    tableName: 'CSM010'
  });
};
