/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ELB010', {
    ELB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ELB_TPPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ELB_EXPORT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ELB_LOJEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ELB_IMPORT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ELB_LOJIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ELB_NRINVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    ELB_PROCES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    ELB_SEQPRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    ELB_CONDPG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ELB_VLCAMB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ELB_VLEXT: {
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
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'ELB010'
  });
};
