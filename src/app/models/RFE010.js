/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RFE010', {
    RFE_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RFE_ORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RFE_CRACHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    RFE_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RFE_HORA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RFE_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    RFE_RELOGI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RFE_FUNCAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RFE_GIRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RFE_FLAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RFE_NUMREP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    RFE_DTHRLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    RFE_DTHRG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    RFE_DATAAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RFE_EMPORG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RFE_FILORG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RFE_MATORG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RFE_DHORG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    RFE_IDORG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    RFE_NATU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RFE_PERAPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    RFE_LINHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    RFE_RELSP0: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RFE_PIS: {
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
    }
  }, {
    tableName: 'RFE010'
  });
};
